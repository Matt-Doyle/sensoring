#!/usr/bin/env groovy

node() {
    stage('Checkout') {
        checkout scm
    }
    stage('Build') {
        echo 'Building...'
        sh 'git reset --hard'
        sh 'git clean -df'
        sh 'npm install'
        sh 'npm run "production-build"'
    }
    stage('Test') {
        echo 'Testing...'
    }
    stage('Deploy') {
        echo 'Deploying...'
    }
}