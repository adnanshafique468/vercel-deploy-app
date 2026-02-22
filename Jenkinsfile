pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('vercel_token')
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                bat 'vercel --prod --token=%VERCEL_TOKEN% --confirm'
            }
        }
    }
}