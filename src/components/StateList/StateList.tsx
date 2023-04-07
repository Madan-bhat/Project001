import {states} from '@/utils/addressConstants';
import React, {memo, useState} from 'react';
import {View} from 'react-native';
import TextInput from '../../ui/TextInput';
import Modal from '../../ui/Modal';
import {TouchableOpacity} from 'react-native';
import Text from '../../ui/Text';
import {Spacing} from '@/utils/constants';
import {Portal} from 'react-native-paper';
import {styles} from './StateList.styles';
import {useDispatch, useSelector} from 'react-redux';
import {updateAddress} from '@/services/reducers/profile.slice';
import {ScrollView} from 'react-native';

const StatesModal = ({visible, closeModal, onSelect}: any) => {
  const handleSelectState = (stateName: string) => {
    onSelect(stateName);
    closeModal();
  };

  return (
    <Portal>
      <Modal
        style={{padding: Spacing.xl}}
        visible={visible}
        onDismiss={closeModal}>
        <View style={styles.card}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {states.map((state, index) => (
              <TouchableOpacity
                key={index}
                style={styles.stateButton}
                onPress={() => handleSelectState(state)}>
                <Text>{state}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </Portal>
  );
};

const StateList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {profile} = useSelector(state => state?.profile);

  const handleSelect = (stateName: React.SetStateAction<string>) => {
    dispatch(
      updateAddress({
        state: stateName,
      }),
    );
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleOpenModal}>
        <TextInput
          mode={'flat'}
          style={styles.stateButton}
          value={profile.address_detail.state}
          onFocus={handleOpenModal}
          placeholder="Select a state"
          editable={false}
        />
      </TouchableOpacity>
      <StatesModal
        visible={modalVisible}
        closeModal={handleCloseModal}
        onSelect={handleSelect}
      />
    </View>
  );
};

export default memo(StateList);