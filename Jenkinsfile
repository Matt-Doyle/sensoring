#!/usr/bin/env groovy

pipeline {

    agent any

    currentBuild.result = "SUCCESS"

    try {
        stages {
            stage('Checkout') {
                checkout scm
            }

            stage('Build') {
                steps {
                    echo 'Building...'
                    sh 'git reset --hard'
                    sh 'git clean -df'
                    sh 'npm install'
                    sh 'npm run "production-build"'
                }
            }
            stage('Test') {
                steps {
                    echo 'Testing...'
                }
            }
            stage('Deploy') {
                steps {
                    echo 'Deploying...'
                }
            }
        }
    }
    catch(err) {
        currentBuild.result = "FAILURE"
        throw err
    }
}