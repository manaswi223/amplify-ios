#
#  Be sure to run `pod spec lint AmplifyExtensions.podspec' to ensure this is a
#  valid spec and to remove all comments including this before submitting the spec.
#
#  To learn more about Podspec attributes see https://guides.cocoapods.org/syntax/podspec.html
#  To see working Podspecs in the CocoaPods repo see https://github.com/CocoaPods/Specs/
#

# Version definitions
$AMPLIFY_VERSION = '1.0.5'
$AMPLIFY_RELEASE_TAG = "v#{$AMPLIFY_VERSION}"

Pod::Spec.new do |s|
  s.name         = 'AmplifyExtensions'
  s.version      = $AMPLIFY_VERSION
  s.summary      = 'Amazon Web Services Amplify for iOS.'

  s.description  = 'AWS Amplify extensions for other third-part frameworks such as PromiseKit and Kingfisher'

  s.homepage     = 'https://github.com/aws-amplify/amplify-ios'
  s.license      = 'Apache License, Version 2.0'
  s.author       = { 'Amazon Web Services' => 'amazonwebservices' }
  s.source       = { :git => 'https://github.com/aws-amplify/amplify-ios.git', :tag => $AMPLIFY_RELEASE_TAG }

  s.platform     = :ios, '11.0'
  s.swift_version = '5.0'

  s.subspec 'Kingfisher' do |ss|
    ss.source_files = 'AmplifyExtensions/Kingfisher/*.swift'
    ss.dependency 'Amplify', $AMPLIFY_VERSION
    ss.dependency 'Kingfisher', '~> 5.14'
    ss.weak_framework = 'Amplify', 'Kingfisher'
  end

end
