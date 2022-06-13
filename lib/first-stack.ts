import * as lambda from '@aws-cdk/aws-lambda'
import * as cdk from '@aws-cdk/core'
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations'
import * as apigwv2 from '@aws-cdk/aws-apigatewayv2'
import * as path from 'path'

export class FirstStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myLambda = new lambda.Function(this, 'MyHandler', {
      functionName: 'firstLambda',
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('src'),
      handler: 'index.handler'
    })
    

    //const testIntegration = new HttpLambdaIntegration('BooksIntegration', myLambda);

    /*const httpApi = new apigwv2.HttpApi(scope, 'HttpApi');

    httpApi.addRoutes({
      path: '/test',
      methods: [ apigwv2.HttpMethod.GET ],
      integration: testIntegration,
    });*/
  }
}
