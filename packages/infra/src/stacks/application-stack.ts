import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { UserIdentity, Website } from '@nx-sample/common-constructs';

export class ApplicationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new UserIdentity(this, 'UserIdentity');
    new Website(this, 'Website');
  }
}
