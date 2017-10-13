#!/usr/bin/env groovy

node('npm && webpack') {

    agent any

    stages {
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