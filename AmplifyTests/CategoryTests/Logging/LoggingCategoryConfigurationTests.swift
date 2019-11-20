//
// Copyright 2018-2019 Amazon.com,
// Inc. or its affiliates. All Rights Reserved.
//
// SPDX-License-Identifier: Apache-2.0
//

import XCTest
import CwlPreconditionTesting

@testable import Amplify
@testable import AmplifyTestCommon

class LoggingCategoryConfigurationTests: XCTestCase {
    override func setUp() {
        Amplify.reset()
    }

    func testCanAddLoggingPlugin() throws {
        let plugin = MockLoggingCategoryPlugin()
        XCTAssertNoThrow(try Amplify.add(plugin: plugin))
    }

    func testCanConfigureLoggingPlugin() throws {
        let plugin = MockLoggingCategoryPlugin()
        try Amplify.add(plugin: plugin)

        let loggingConfig = LoggingCategoryConfiguration(
            plugins: ["MockLoggingCategoryPlugin": true]
        )

        let amplifyConfig = AmplifyConfiguration(logging: loggingConfig)

        try Amplify.configure(amplifyConfig)

        XCTAssertNotNil(Amplify.Logging)
        XCTAssertNotNil(try Amplify.Logging.getPlugin(for: "MockLoggingCategoryPlugin"))
    }

    func testCanResetLoggingPlugin() throws {
        let plugin = MockLoggingCategoryPlugin()
        let resetWasInvoked = expectation(description: "reset() was invoked")
        plugin.listeners.append { message in
            if message == "reset" {
                resetWasInvoked.fulfill()
            }
        }
        try Amplify.add(plugin: plugin)

        let loggingConfig = LoggingCategoryConfiguration(
            plugins: ["MockLoggingCategoryPlugin": true]
        )

        let amplifyConfig = AmplifyConfiguration(logging: loggingConfig)

        try Amplify.configure(amplifyConfig)
        Amplify.reset()
        waitForExpectations(timeout: 1.0)
    }

    func testResetRemovesAddedPlugin() throws {
        let plugin = MockLoggingCategoryPlugin()
        try Amplify.add(plugin: plugin)

        let loggingConfig = LoggingCategoryConfiguration(
            plugins: ["MockLoggingCategoryPlugin": true]
        )

        let amplifyConfig = AmplifyConfiguration(logging: loggingConfig)

        try Amplify.configure(amplifyConfig)
        Amplify.reset()
        XCTAssertThrowsError(try Amplify.Logging.getPlugin(for: "MockLoggingCategoryPlugin"),
                             "Getting a plugin after reset() should throw") { error in
                                guard case LoggingError.configuration = error else {
                                    XCTFail("Expected PluginError.noSuchPlugin")
                                    return
                                }
        }
    }

    func testCanRegisterMultipleLoggingPlugins() throws {
        let plugin1 = MockLoggingCategoryPlugin()
        try Amplify.add(plugin: plugin1)

        let plugin2 = MockSecondLoggingCategoryPlugin()
        try Amplify.add(plugin: plugin2)

        let loggingConfig = LoggingCategoryConfiguration(
            plugins: [
                "MockLoggingCategoryPlugin": true,
                "MockSecondLoggingCategoryPlugin": true
            ]
        )

        let amplifyConfig = AmplifyConfiguration(logging: loggingConfig)

        try Amplify.configure(amplifyConfig)

        XCTAssertNotNil(try Amplify.Logging.getPlugin(for: "MockLoggingCategoryPlugin"))
        XCTAssertNotNil(try Amplify.Logging.getPlugin(for: "MockSecondLoggingCategoryPlugin"))
    }

    func testCanUseDefaultPluginIfOnlyOnePlugin() throws {
        let plugin = MockLoggingCategoryPlugin()
        let methodInvokedOnDefaultPlugin = expectation(description: "test method invoked on default plugin")
        plugin.listeners.append { message in
            if message == "error(_:)" {
                methodInvokedOnDefaultPlugin.fulfill()
            }
        }
        try Amplify.add(plugin: plugin)

        let loggingConfig = LoggingCategoryConfiguration(plugins: ["MockLoggingCategoryPlugin": true])
        let amplifyConfig = AmplifyConfiguration(logging: loggingConfig)

        try Amplify.configure(amplifyConfig)

        Amplify.Logging.error("test")

        waitForExpectations(timeout: 1.0)
    }

    func testPreconditionFailureInvokingWithMultiplePlugins() throws {
        let plugin1 = MockLoggingCategoryPlugin()
        try Amplify.add(plugin: plugin1)

        let plugin2 = MockSecondLoggingCategoryPlugin()
        try Amplify.add(plugin: plugin2)

        let loggingConfig = LoggingCategoryConfiguration(
            plugins: [
                "MockLoggingCategoryPlugin": true,
                "MockSecondLoggingCategoryPlugin": true
            ]
        )

        let amplifyConfig = AmplifyConfiguration(logging: loggingConfig)

        try Amplify.configure(amplifyConfig)

        let exception: BadInstructionException? = catchBadInstruction {
            Amplify.Logging.error("test")
        }
        XCTAssertNotNil(exception)
    }

    func testCanUseSpecifiedPlugin() throws {
        let plugin1 = MockLoggingCategoryPlugin()
        let methodShouldNotBeInvokedOnDefaultPlugin =
            expectation(description: "test method should not be invoked on default plugin")
        methodShouldNotBeInvokedOnDefaultPlugin.isInverted = true
        plugin1.listeners.append { message in
            if message == "error(_:)" {
                methodShouldNotBeInvokedOnDefaultPlugin.fulfill()
            }
        }
        try Amplify.add(plugin: plugin1)

        let plugin2 = MockSecondLoggingCategoryPlugin()
        let methodShouldBeInvokedOnSecondPlugin =
            expectation(description: "test method should be invoked on second plugin")
        plugin2.listeners.append { message in
            if message == "error(_:)" {
                methodShouldBeInvokedOnSecondPlugin.fulfill()
            }
        }
        try Amplify.add(plugin: plugin2)

        let loggingConfig = LoggingCategoryConfiguration(
            plugins: [
                "MockLoggingCategoryPlugin": true,
                "MockSecondLoggingCategoryPlugin": true
            ]
        )

        let amplifyConfig = AmplifyConfiguration(logging: loggingConfig)

        try Amplify.configure(amplifyConfig)
        try Amplify.Logging.getPlugin(for: "MockSecondLoggingCategoryPlugin")
            .default
            .error("test")
        waitForExpectations(timeout: 1.0)
    }

    func testCanConfigurePluginDirectly() throws {
        let plugin = MockLoggingCategoryPlugin()
        let configureShouldBeInvokedFromCategory =
            expectation(description: "Configure should be invoked by Amplify.configure()")
        let configureShouldBeInvokedDirectly =
            expectation(description: "Configure should be invoked by getPlugin().configure()")

        var invocationCount = 0
        plugin.listeners.append { message in
            if message == "configure(using:)" {
                invocationCount += 1
                switch invocationCount {
                case 1: configureShouldBeInvokedFromCategory.fulfill()
                case 2: configureShouldBeInvokedDirectly.fulfill()
                default: XCTFail("Expected configure() to be called only two times, but got \(invocationCount)")
                }
            }
        }
        try Amplify.add(plugin: plugin)

        let loggingConfig = LoggingCategoryConfiguration(
            plugins: ["MockLoggingCategoryPlugin": true]
        )

        let amplifyConfig = AmplifyConfiguration(logging: loggingConfig)

        try Amplify.configure(amplifyConfig)
        try Amplify.Logging.getPlugin(for: "MockLoggingCategoryPlugin").configure(using: true)
        waitForExpectations(timeout: 1.0)
    }

    func testPreconditionFailureInvokingBeforeConfig() throws {
        let plugin = MockLoggingCategoryPlugin()
        try Amplify.add(plugin: plugin)

        // Remember, this test must be invoked with a category that doesn't include an Amplify-supplied default plugin
        let exception: BadInstructionException? = catchBadInstruction {
            Amplify.Logging.debug("foo")
        }
        XCTAssertNotNil(exception)
    }

    // MARK: - Test internal config behavior guarantees

    func testThrowsConfiguringTwice() throws {
        let plugin = MockLoggingCategoryPlugin()
        try Amplify.add(plugin: plugin)
        let categoryConfig = LoggingCategoryConfiguration(
            plugins: ["MockLoggingCategoryPlugin": true]
        )

        try Amplify.Logging.configure(using: categoryConfig)
        XCTAssertThrowsError(try Amplify.Logging.configure(using: categoryConfig),
                             "configure() an already configured plugin should throw") { error in
                                guard case ConfigurationError.amplifyAlreadyConfigured = error else {
                                    XCTFail("Expected ConfigurationError.amplifyAlreadyConfigured")
                                    return
                                }
        }
    }

    func testCanConfigureAfterReset() throws {
        let plugin = MockLoggingCategoryPlugin()
        try Amplify.add(plugin: plugin)
        let categoryConfig = LoggingCategoryConfiguration(
            plugins: ["MockLoggingCategoryPlugin": true]
        )

        try Amplify.Logging.configure(using: categoryConfig)

        let semaphore = DispatchSemaphore(value: 1)
        Amplify.Logging.reset { semaphore.signal() }
        semaphore.wait()

        XCTAssertNoThrow(try Amplify.Logging.configure(using: categoryConfig))
    }

}
