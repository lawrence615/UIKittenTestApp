import React, { useState, useEffect } from 'react'
import { TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Input, Icon, List, ListItem, Avatar, Button } from '@ui-kitten/components';

import { setInitialPosts, onLoadMorePosts } from 'slices/postSlice'
import { selectPosts } from 'selectors/post'

const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const posts = useSelector(selectPosts)

  const [value, setValue] = useState('');
  const [loadingMore, setLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);


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

  const loadMoreResults = async () => {
    console.log('loadMoreResults')

    if (loadingMore || allLoaded)
      return

    if (data.length == 100)
      setAllLoaded(true)

    setLoadingMore(true)

    const newItems = fetchMore(10)

    await delay(1000)

    await processNewResults(newItems)

    setLoadingMore(false);
  }

  const fetchMore = (total) => {
    // data.push()
    // for (let item of newItems) {
    //   json.push(item);
    // }

    // for (let index = 0; index < total; index++) {
    //   console.log(myArray[index]);
    // }

    return new Array(total).fill({
      title: 'Title for Item',
      description: 'Description for Item',
    });
  }

  const processNewResults = async (newItems) => {
    newItems.forEach(function (value) {
      console.log(value);
    });
  }

  useEffect(() => {
    const initialData = new Array(10).fill({
      title: 'Title for Item',
      description: 'Description for Item',
    });

    // setData(initialData)
    dispatch(setInitialPosts(initialData))

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
        data={posts}
        renderItem={renderItem}
        onEndReached={() => console.log('loadMoreResults')}
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
});

export default HomeScreen