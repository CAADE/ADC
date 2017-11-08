pipeline {
  agent {
    label 'node'
  }
  stages {
    stage('Build Docs') {
      steps {
        sh 'git submodule update --init --recursive'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run-script build'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run-script deploy-test'
        sh 'npm run-script test'
      }
    }
    stage('Production') {
      steps {
        sh 'npm run-script deploy-prod'
      }
    }
  }
}
