import qs from 'qs';
import { Linking } from 'react-native';
import { EMAIL_SUPPORT } from '@woap/config';

import InvalidURL from './email.error';

export class EmailService {
  public static async sendEmail({ subject, body }: { subject: string; body: string }) {
    let url = `mailto:${EMAIL_SUPPORT}`;

    const query = qs.stringify({
      subject: subject,
      body: body,
    });

    if (query.length) {
      url += `?${query}`;
    }

    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
      throw new InvalidURL(url);
    }

    return Linking.openURL(url);
  }
}
