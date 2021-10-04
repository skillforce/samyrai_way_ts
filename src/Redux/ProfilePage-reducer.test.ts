import ProfilePageReducer, {addPost, deletePost} from './ProfilePage-reducer';
import {PostType} from '../components/Profile/MyPosts/Post/Post';
import {ProfileType} from '../components/Profile/ProfileContainer';


test('length of post data(initial state) should be incremented',()=>{
    // 1.test data
    let action = addPost('some text')
    let InitialState = {
        postData: [
            {
                avatar: 'https://cdn.shopify.com/s/files/1/1330/6165/products/itachiheadweek_2048x.jpg?v=1623042372',
                name: 'Itachi',
                message: 'How is your project?',
                time: '22:00',
                likes: 15,
                id: 1
            },
            {
                avatar: 'https://wiki.jcdn.ru/w/images/thumb/f/f0/SakuraBorutoMovie.jpg/250px-SakuraBorutoMovie.jpg',
                name: 'Sakura',
                message: 'How are you?',
                time: '23:00',
                likes: 10,
                id: 2
            }, {
                avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1579004/pub_5f8606849cd6237d30770702_5f8606e6ae6a9712bf6ef638/scale_1200',
                name: 'Saske',
                message: 'What do you do?',
                time: '01:00',
                likes: 7,
                id: 3
            }
        ] as PostType[],
        profile: null as ProfileType | null,
        status: null as string | null
    }
        //2.action
    let newState = ProfilePageReducer(InitialState,action)
    // 3.expectation
    expect (newState.postData.length).toBe(4)
})

test('length of post data(initial state) should be decrease',()=>{
    // 1.test data
    let action = deletePost(1)
    let InitialState = {
        postData: [
            {
                avatar: 'https://cdn.shopify.com/s/files/1/1330/6165/products/itachiheadweek_2048x.jpg?v=1623042372',
                name: 'Itachi',
                message: 'How is your project?',
                time: '22:00',
                likes: 15,
                id: 1
            },
            {
                avatar: 'https://wiki.jcdn.ru/w/images/thumb/f/f0/SakuraBorutoMovie.jpg/250px-SakuraBorutoMovie.jpg',
                name: 'Sakura',
                message: 'How are you?',
                time: '23:00',
                likes: 10,
                id: 2
            }, {
                avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1579004/pub_5f8606849cd6237d30770702_5f8606e6ae6a9712bf6ef638/scale_1200',
                name: 'Saske',
                message: 'What do you do?',
                time: '01:00',
                likes: 7,
                id: 3
            }
        ] as PostType[],
        profile: null as ProfileType | null,
        status: null as string | null
    }
        //2.action
    let newState = ProfilePageReducer(InitialState,action)
    // 3.expectation
    expect (newState.postData.length).toBe(2)
    expect (newState.postData[0].id).toBe(2)
})

test('after deleting length of postData shouldn\'t be decrement',()=>{
    // 1.test data
    let action = deletePost(7)
    let InitialState = {
        postData: [
            {
                avatar: 'https://cdn.shopify.com/s/files/1/1330/6165/products/itachiheadweek_2048x.jpg?v=1623042372',
                name: 'Itachi',
                message: 'How is your project?',
                time: '22:00',
                likes: 15,
                id: 1
            },
            {
                avatar: 'https://wiki.jcdn.ru/w/images/thumb/f/f0/SakuraBorutoMovie.jpg/250px-SakuraBorutoMovie.jpg',
                name: 'Sakura',
                message: 'How are you?',
                time: '23:00',
                likes: 10,
                id: 2
            }, {
                avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1579004/pub_5f8606849cd6237d30770702_5f8606e6ae6a9712bf6ef638/scale_1200',
                name: 'Saske',
                message: 'What do you do?',
                time: '01:00',
                likes: 7,
                id: 3
            }
        ] as PostType[],
        profile: null as ProfileType | null,
        status: null as string | null
    }
        //2.action
    let newState = ProfilePageReducer(InitialState,action)
    // 3.expectation
    expect (newState.postData.length).toBe(3)
    expect (newState.postData[0].id).toBe(1)
    expect (newState.postData[1].id).toBe(2)
    expect (newState.postData[2].id).toBe(3)
})


