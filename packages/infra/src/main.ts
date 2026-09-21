import { ApplicationStage } from './stages/application-stage.js';
import { App } from '@nx-sample/common-constructs';

const app = new App();

// Use this to deploy your own sandbox environment (assumes your CLI credentials)
new ApplicationStage(app, 'nx-sample-infra-sandbox', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

// Define other instances of stages, such as beta and prod, below

app.synth();
