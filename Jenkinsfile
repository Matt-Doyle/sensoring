#!/usr/bin/env groovy

properties([
    parameters([
        string(defaultValue: '/home/sensoring_deploy/sensoring', description: 'Where should we deploy the build to?', name: 'DEPLOY_DIR'),
        string(defaultValue: 'https://github.com/Matt-Doyle/sensoring', description: 'What is the github repository we are using?', name: 'GITHUB_REPO')
    ])
])

node() {
    stage('Checkout') {
        echo 'Checking out...'
        checkout scm
        sh 'git reset --hard'
        sh 'git clean -df'
    }
    stage('Build') {
        echo 'Building...'
        sh 'npm install'
        sh 'npm run "production-build"'
    }
    stage('Test') {
        echo 'Testing...'
    }
    stage('Deploy') {
        echo 'Deploying...'
        sh "mkdir ${params.DEPLOY_DIR}"
        sh "rm -r ${params.DEPLOY_DIR}"
        sh "cp -r . ${params.DEPLOY_DIR}"
    }
}