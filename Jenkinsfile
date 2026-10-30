pipeline {
    agent any

    tools {
        nodejs "NodeJS 24"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/suloka7218-spec/ParabankPW.git'    
            }
        }

        stage('Install') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Test') {
            steps {
                bat 'npx playwright test tests/paraBank --reporter=html,junit'
            }
            post {
                always {
                    junit 'test-results/*.xml'
                    publishHTML(target: [
                        reportDir: 'playwright-report',
                        reportFiles: 'index.html',
                        reportName: 'Playwright HTML Report'
                    ])
                }
            }
        }
    }
}
