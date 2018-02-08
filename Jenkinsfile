pipeline {
  agent {
    label 'node'
  }
  environment {
    CAADE_REGISTRY = 'madajaju'
    DOCKER_USER2 = 'madajaju'
    DOCKER_PASS2 = 'july2711'
  }
  stages {
    stage('Build') {
      steps {
        sh 'env'
        sh 'echo ${CAADE_REGISTRY}'
        sh 'docker login --username=$DOCKER_USER2 --password=$DOCKER_PASS2'
        sh 'npm run-script build'
        sh 'npm run-script publish'
      }
    }
    stage('Build Docs') {
      steps {
        sh 'git submodule update --init --recursive'
        sh 'npm run-script build-doc'
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
