pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('vercel_token')
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                sh 'vercel --prod --token=$VERCEL_TOKEN --confirm'
            }
        }
    }
}