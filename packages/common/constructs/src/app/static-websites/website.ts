import * as url from 'url';
import { Construct } from 'constructs';
import { StaticWebsite, StaticWebsiteProps } from '../../core/index.js';

export type WebsiteProps = Omit<
  StaticWebsiteProps,
  'websiteName' | 'websiteFilePath'
>;

export class Website extends StaticWebsite {
  constructor(scope: Construct, id: string, props?: WebsiteProps) {
    super(scope, id, {
      ...props,
      websiteName: 'Website',
      websiteFilePath: url.fileURLToPath(
        new URL(
          '../../../../../../dist/packages/website/bundle',
          import.meta.url,
        ),
      ),
    });
  }
}
