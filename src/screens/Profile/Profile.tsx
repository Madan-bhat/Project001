import React from 'react';
import {ScrollView, View} from 'react-native';

import {getFullName} from '@/utils/getFullName';
import {styles} from './Profile.styles';
import Divider from '@/ui/Divider';
import {useWalletAmountQuery} from '@/services/apis/wallet.api';
import Wallet from '@/components/Wallet';
import ProfileInfo from '@/components/ProfileInfo/ProfileInfo';
import {Button, Text} from '@/ui';
import {Fonts, fontSize} from '@/utils/fonts';
import {Spacing} from '@/utils/constants';
import {useUserDetailsQuery} from '@/services/apis/login.api';
import {Colors} from '@/utils/colors';

export default function Profile() {
  const {data: user} = useUserDetailsQuery({});
  const {data: wallet, refetch} = useWalletAmountQuery({});
  const fullName = getFullName(user.first_name, user.last_name);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <ProfileInfo data={user} fullName={fullName} />
          <Divider style={styles.divider} />
          <Wallet wallet={wallet} onRefreshWallet={refetch} />
          <Divider style={styles.divider} />
          <View>
            <Text style={{...Fonts.h3}}>About me</Text>
            <View style={{gap: Spacing.xs, marginTop: Spacing.m}}>
              <Text>
                <Text
                  style={{
                    ...Fonts.h3,
                    fontSize: fontSize.h6,
                  }}>
                  contact on:{' '}
                </Text>
                {user.mobile_number}
              </Text>
              <Text>
                <Text
                  style={{
                    ...Fonts.h3,
                    fontSize: fontSize.h6,
                  }}>
                  Account type:{' '}
                </Text>
                {user.category}
              </Text>
              <Text>
                <Text
                  style={{
                    ...Fonts.h3,
                    fontSize: fontSize.h6,
                  }}>
                  Hobbies:{' '}
                </Text>
                {user.hobby}
              </Text>
              <Text>
                <Text
                  style={{
                    ...Fonts.h3,
                    fontSize: fontSize.h6,
                  }}>
                  Gender:{' '}
                </Text>
                {user.gender}
              </Text>
            </View>
          </View>
        </View>
        <Button style={styles.logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </Button>
      </View>
    </View>
  );
}
