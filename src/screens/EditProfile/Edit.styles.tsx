import {Colors} from '@/utils/colors';
import {BorderRadius, Spacing} from '@/utils/constants';
import {VerticalMargin} from '@/utils/spacing';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: Spacing.l,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.m,
    padding: Spacing.xl,
    justifyContent: 'space-between',
  },
  divider: {...VerticalMargin('m')},
});
