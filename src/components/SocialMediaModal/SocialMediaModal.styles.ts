import {StyleSheet} from 'react-native';

import {width} from '@/utils/Dimension';
import {Colors} from '@/utils/colors';
import {BorderRadius, Spacing} from '@/utils/constants';
import {Fonts, fontSize} from '@/utils/fonts';

export const styles = StyleSheet.create({
  card: {
    width: width - Spacing.xl * 2,
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.m,
    padding: Spacing.xl,
    justifyContent: 'space-between',
  },
  updateButton: {
    borderRadius: BorderRadius.xs,
    padding: Spacing.s,
    marginTop: Spacing.m,
    backgroundColor: Colors.success,
  },
  updateText: {
    ...Fonts.h3,
    fontSize: fontSize.h5,
    color: Colors.white,
  },
  link: {textAlign: 'left', marginTop: Spacing.m, color: Colors.info},
});
