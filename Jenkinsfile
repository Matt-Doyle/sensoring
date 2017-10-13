#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

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
    }
}