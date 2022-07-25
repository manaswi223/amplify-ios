//
// Copyright Amazon.com Inc. or its affiliates.
// All Rights Reserved.
//
// SPDX-License-Identifier: Apache-2.0
//
import Foundation

extension SignInState {

    struct Resolver: StateMachineResolver {

        typealias StateType = SignInState
        let defaultState = SignInState.notStarted

        func resolve(
            oldState: SignInState,
            byApplying event: StateMachineEvent)
        -> StateResolution<SignInState> {

            switch oldState {
            case .notStarted:
                if case .initiateSignInWithSRP(let signInEventData) = event.isSignInEvent {
                    let action = StartSRPFlow(signInEventData: signInEventData)
                    return .init(newState: .signingInWithSRP(.notStarted, signInEventData),
                                 actions: [action])
                }
                if case .initiateCustomSignIn(let signInEventData) = event.isSignInEvent {
                    let action = StartCustomSignInFlow(signInEventData: signInEventData)
                    return .init(
                        newState: .signingInWithCustom(.notStarted, signInEventData),
                        actions: [action])
                }
                if case .initiateCustomSignInWithSRP(let signInEventData) = event.isSignInEvent {
                    let action = StartSRPFlow(signInEventData: signInEventData)
                    return .init(newState: .signingInWithSRPCustom(.notStarted, signInEventData),
                                 actions: [action])
                }
                if case .initiateMigrateAuth(let signInEventData) = event.isSignInEvent {
                    let action = StartMigrateAuthFlow(signInEventData: signInEventData)
                    return .init(newState: .signingInViaMigrateAuth(.notStarted, signInEventData),
                                 actions: [action])
                }
                return .from(oldState)
            case .signingInWithSRP(let srpSignInState, let signInEventData):

                if let signInEvent = event as? SignInEvent,
                   case .receivedChallenge(let challenge) = signInEvent.eventType {
                    let action = InitializeResolveChallenge(challenge: challenge)
                    let subState = SignInChallengeState.notStarted
                    return .init(newState: .resolvingChallenge(subState, challenge.challenge.authChallengeType), actions: [action])
                }

                let resolution = SRPSignInState.Resolver().resolve(oldState: srpSignInState,
                                                                   byApplying: event)
                let signingInWithSRP = SignInState.signingInWithSRP(resolution.newState,
                                                                    signInEventData)
                return .init(newState: signingInWithSRP, actions: resolution.actions)

            case .signingInWithCustom(let customSignInState, let signInEventData):

                if let signInEvent = event as? SignInEvent,
                   case .receivedChallenge(let challenge) = signInEvent.eventType {
                    let action = InitializeResolveChallenge(challenge: challenge)
                    let subState = SignInChallengeState.notStarted
                    return .init(newState: .resolvingChallenge(subState, challenge.challenge.authChallengeType), actions: [action])
                }

                let resolution = CustomSignInState.Resolver().resolve(
                    oldState: customSignInState, byApplying: event)
                let signingInWithCustom = SignInState.signingInWithCustom(
                    resolution.newState, signInEventData)
                return .init(newState: signingInWithCustom, actions: resolution.actions)

            case .signingInViaMigrateAuth(let migrateSignInState, let signInEventData):

                if let signInEvent = event as? SignInEvent,
                   case .receivedChallenge(let challenge) = signInEvent.eventType {
                    let action = InitializeResolveChallenge(challenge: challenge)
                    let subState = SignInChallengeState.notStarted
                    return .init(newState: .resolvingChallenge(subState, challenge.challenge.authChallengeType), actions: [action])
                }

                let resolution = MigrateSignInState.Resolver().resolve(
                    oldState: migrateSignInState, byApplying: event)
                let signingInWithMigration = SignInState.signingInViaMigrateAuth(
                    resolution.newState, signInEventData)
                return .init(newState: signingInWithMigration, actions: resolution.actions)

            case .resolvingChallenge(let challengeState, let challengeType):
                let resolution = SignInChallengeState.Resolver().resolve(
                    oldState: challengeState,
                    byApplying: event)
                return .init(newState: .resolvingChallenge(resolution.newState, challengeType),
                             actions: resolution.actions)

            case .signingInWithSRPCustom(let srpSignInState, let signInEventData):
                if let signInEvent = event as? SignInEvent,
                   case .receivedChallenge(let challenge) = signInEvent.eventType {
                    let action = InitializeResolveChallenge(challenge: challenge)
                    let subState = SignInChallengeState.notStarted
                    return .init(newState: .resolvingChallenge(subState, challenge.challenge.authChallengeType), actions: [action])
                }

                let resolution = SRPSignInState.Resolver().resolve(oldState: srpSignInState,
                                                                   byApplying: event)
                let signingInWithSRP = SignInState.signingInWithSRPCustom(resolution.newState,
                                                                          signInEventData)
                return .init(newState: signingInWithSRP, actions: resolution.actions)

            case .done, .error:
                return .from(oldState)
            }
        }

    }
}
