/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
  useLatestVersion,
  useActiveDocContext,
  useVersions,
} from '@docusaurus/plugin-content-docs/client';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import useIsBrowser from '@docusaurus/useIsBrowser';

function PackageJson() {
  const latestVersion = useLatestVersion();
  const allVersions = useVersions();
  // Only happens in deploy preview / local dev, but still nice
  const versionName =
    latestVersion.name === 'current' ? allVersions[1].name : latestVersion.name;
  return (
    <CodeBlock language="json" title="package.json">{`{
  "dependencies": {
    "@docusaurus/core": "${versionName}",
    "@docusaurus/preset-classic": "${versionName}",
    // ...
  }
}`}</CodeBlock>
  );
}

function VersionNotice() {
  const latestVersion = useLatestVersion();
  const activeVersion = useActiveDocContext().activeVersion!;
  const isBrowser = useIsBrowser();
  // It's possible that the user is browsing a snapshot version
  // which is only detectable once we are in the browser
  if (isBrowser) {
    const location = window.location.hostname;
    if (
      location.includes('netlify.app') &&
      !location.includes('deploy-preview')
    ) {
      return (
        <Admonition type="caution">
          <p>
            You are browsing an archived version and the snippet below is
            outdated. Please go to the{' '}
            <Link href="https://docusaurus.io/docs/installation">
              main site
            </Link>{' '}
            and follow the instructions there to upgrade to the latest version.
          </p>
        </Admonition>
      );
    }
  }
  if (activeVersion.name === 'current') {
    return (
      <Admonition type="info">
        <p>
          You are browsing the documentation of an unreleased version. If you
          want to use any unreleased feature, you can use the{' '}
          <Link href="/community/canary">
            <code>@canary</code> release
          </Link>
          .
        </p>
      </Admonition>
    );
  }
  if (activeVersion.name !== latestVersion.name) {
    return (
      <Admonition type="caution">
        <p>
          You are browsing the documentation of an outdated version. The snippet
          below shows how to upgrade to the latest version.
        </p>
      </Admonition>
    );
  }
  return null;
}

export default function UpgradeGuide(): JSX.Element {
  return (
    <>
      <VersionNotice />
      <PackageJson />
    </>
  );
}
