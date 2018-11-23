pipeline pipeline {
  agent {
    label 'node'
  }
  environment {
    CAADE_REGISTRY = "madajaju"
  }
    stage('Build Docs') {
      steps {
        sh 'npm run build-doc'
      }
    }
    stage('Build Services') {
      steps {
        sh 'npm run-script build'
        sh 'npm run-script deploy-apps'
      }
    }
    stage('Test Unit') {
        agent {
            label 'node'
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
    stage('Test Integration') {
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
