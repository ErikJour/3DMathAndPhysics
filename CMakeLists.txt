cmake_minimum_required(VERSION 3.22 FATAL_ERROR)

project(Math&Physics VERSION 0.1.0)

set(CMAKE_CXX_STANDARD 20)

set(ENV{WEBVIEW2_DEFAULT_BACKGROUND_COLOR} "FF000000")

add_subdirectory(Libs/JUCE)

add_subdirectory(App)