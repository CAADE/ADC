pipeline {
  agent {
    label 'node'
  }
  environment {
    CAADE_REGISTRY = 'madajaju'
  }
  stages {
    stage('Build') {
      steps {
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
        sh 'cd deploy && docker stack deploy --compose-file docker-compose-test.yaml adcTest'
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
