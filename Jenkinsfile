pipeline {
  agent {
    label 'node'
  }
  environment {
    CAADE_REGISTRY = "madajaju"
  }
  stages {
    stage('Build Docs') {
      steps {
        sh 'git submodule update --init --recursive'
        sh 'npm run-script build-doc'
      }
    }
    stage('Build') {
      steps {
        sh 'docker login --username=$DOCKER_USER --password=$DOCKER_PASS'
        sh 'npm run-script build'
        sh 'npm run-script deploy-apps'
      }
    }
    stage('Test') {
    agent {
        label 'docker-master'
      }
      steps {
        sh 'npm run-script deploy-test'
        sh 'npm run-script test'
        sh 'npm run-script teardown-test'
      }
      post {
        always {
          junit "report.xml"
        }
      }
    }
    stage('Production') {
      steps {
        sh 'npm run-script deploy-prod'
      }
    }
  }
}
