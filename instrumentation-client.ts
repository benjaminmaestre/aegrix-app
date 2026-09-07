import { initBotId } from 'botid/client/core';
import { CONTACT_BOT_CHECK_LEVEL } from '@/lib/botid-config';

initBotId({
  protect: [
    {
      path: '/api/contact',
      method: 'POST',
      advancedOptions: {
        checkLevel: CONTACT_BOT_CHECK_LEVEL,
      },
    },
  ],
});
