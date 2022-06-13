#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { FirstStack } from '../lib/first-stack';

const app = new cdk.App();

new FirstStack(app, 'FirstStack', {
});
