import React, { useState, useEffect } from 'react'
import { TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Input, Icon, List, ListItem, Avatar, Button, Text } from '@ui-kitten/components';

import { setInitialPosts, setLoadMore } from 'slices/postSlice'
import { fetchPosts } from 'api/post.service';
import { selectLoadMore, selectAllLoaded, selectPosts } from 'selectors/post'

const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadMore)
  const allLoaded = useSelector(selectAllLoaded)
  const posts = useSelector(selectPosts)

  const [value, setValue] = useState('');


  const renderIcon = (props) => (
    <TouchableWithoutFeedback>
      <Icon {...props} name='search' />
    </TouchableWithoutFeedback>
  );

  const keyExtractor = (item, index) => "post_" + index;

  const renderItem = ({ item, index }) => (
    <ListItem
      title={item.name}
      description={item.message}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  const renderItemIcon = (props) => (
    <Avatar
      style={styles.avatar}
      source={require('assets/icon.png')}
      size='small'
    />
  );

  const renderItemAccessory = (props) => (
    <Button size='tiny'>
      ADD
    </Button>
  );

  const onEndReached = (isAllLoaded) => {
    if (!isAllLoaded) {

      dispatch(setLoadMore())

      setTimeout(() => {
        dispatch(fetchPosts())
      }, 1000);
    }
  }


  const renderListFooter = (isLoading, allLoaded) => (
    <Layout style={styles.footer}>
      {isLoading ? <Text style={styles.footerText}>Loading More...</Text> : null}
      {allLoaded ? <Text style={styles.footerText}>All posts loaded.</Text> : null}
    </Layout>
  )

  useEffect(() => {
    dispatch(setInitialPosts())
  }, [])

  return (
    <Layout style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10 }}>
      <Input
        style={styles.search}
        placeholder='Search song or artist'
        value={value}
        accessoryLeft={renderIcon}
        onChangeText={nextValue => setValue(nextValue)}
      />
      <List
        style={{ flex: 1 }}
        keyExtractor={keyExtractor}
        data={posts}
        renderItem={renderItem}
        scrollEventThrottle={250}
        onEndReached={() => onEndReached(allLoaded)}
        onEndReachedThreshold={0.01}
        maxToRenderPerBatch={10}
        ListFooterComponent={() => renderListFooter(isLoading, allLoaded)}
      />
    </Layout>
  )
}

const styles = StyleSheet.create({
  search: {
    borderRadius: 30
  },
  container: {
    maxHeight: 192,
  },
  avatar: {
    margin: 8,
  },
  footer: {
    padding: 20,
  },
  footerText: {
    fontWeight: '600',
  }
});

export default HomeScreen