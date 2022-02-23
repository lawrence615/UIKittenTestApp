import React, { useState, useEffect } from 'react'
import { TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Input, Icon, List, ListItem, Avatar, Button, Text } from '@ui-kitten/components';

import { setInitialPosts, setLoadMore } from 'slices/postSlice'
import { fetchPosts } from 'api/post.service';
import { selectLoadMore, selectPosts } from 'selectors/post'

const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoadMore)
  const posts = useSelector(selectPosts)

  const [value, setValue] = useState('');


  const renderIcon = (props) => (
    <TouchableWithoutFeedback>
      <Icon {...props} name='search' />
    </TouchableWithoutFeedback>
  );

  const renderItemAccessory = (props) => (
    <Button size='tiny'>
      ADD
    </Button>
  );

  const renderItemIcon = (props) => (
    <Avatar
      style={styles.avatar}
      source={require('assets/icon.png')}
      size='small'
    />
  );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  useEffect(() => {
    console.log('loading', loading)
  }, [loading])

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
        keyExtractor={(item, index) => "post_" + index}
        data={posts}
        renderItem={renderItem}
        scrollEventThrottle={250}
        // onEndReached={() => setLoadMore(true)}
        onEndReached={info => {
          dispatch(setLoadMore())

          setInterval(() => dispatch(fetchPosts(posts.length)), 1000)
        }}
        onEndReachedThreshold={0.01}
        ListFooterComponent={
          <Layout style={styles.footer}>
            {loading &&
              <Text style={styles.footerText}>Loading More...</Text>
            }
          </Layout>
        }
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
    padding: 15,
  },
  footerText: {
    fontWeight: '600',
  }
});

export default HomeScreen