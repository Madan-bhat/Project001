import React, {memo, useCallback, useEffect, useState} from 'react';
import {Pressable, View} from 'react-native';
import {Portal} from 'react-native-paper';

import {Button, TextInput, Modal, Text} from '@/ui';
import {styles} from './ChangePasswordModal.styles';
import {validatePassword} from '@/utils/validatePassword';
import {Colors} from '@/utils/colors';
import {useUpdatePasswordMutation} from '@/services/apis/login.api';

const ChangePasswordModal = () => {
  const [password, setPassword] = useState({
    old_password: '',
    password1: '',
    password2: '',
  });
  const [valid, setValid] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);
  const isValid = validatePassword(password);
  const [update, {error}]: any = useUpdatePasswordMutation({});

  const handleToggleChangePasswordModal = useCallback(() => {
    setPasswordModal(!passwordModal);
  }, [passwordModal]);

  const handlePasswordChange = (key: string, value: string) => {
    setPassword({
      ...password,
      [key]: value,
    });
  };

  useEffect(() => {
    setValid(isValid.valid);
  }, [isValid]);

  const handleSubmit = useCallback(async () => {
    if (valid) {
      setValid(false);
      try {
        let data = await update(password);
        if (!data?.error) {
          handleToggleChangePasswordModal();
        }
      } catch (error) {}
    }
  }, [handleToggleChangePasswordModal, password, update, valid]);

  return (
    <View>
      <Pressable onPress={handleToggleChangePasswordModal}>
        <Text style={styles.link}>Change PIN</Text>
      </Pressable>
      <Portal>
        <Modal
          style={styles.modal}
          visible={passwordModal}
          onDismiss={handleToggleChangePasswordModal}>
          <View style={styles.card}>
            <View>
              <TextInput
                keyboardType={'number-pad'}
                onChangeText={val => handlePasswordChange('old_password', val)}
                style={styles.input}
                placeholder="Old Password"
              />
              <TextInput
                keyboardType={'number-pad'}
                onChangeText={val => handlePasswordChange('password1', val)}
                style={styles.input}
                placeholder="New Password"
              />
              <TextInput
                keyboardType={'number-pad'}
                onChangeText={val => handlePasswordChange('password2', val)}
                style={styles.input}
                placeholder="Confirm Password"
              />
            </View>
            {error && <Text style={styles.error}>{error?.data?.details}</Text>}

            <Button
              onPress={handleSubmit}
              buttonColor={valid ? Colors.success : Colors.grey}
              style={styles.updateButton}>
              <Text style={styles.updateText}>{'Confirm'}</Text>
            </Button>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

export default memo(ChangePasswordModal);
