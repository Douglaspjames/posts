import axios from 'axios'

const url = 'api/posts/'

export default {

  async getPosts() {
    let res = await axios.get(url)
    const data = res.data
    return data.map(post => ({
      ...post,
      createdAt: new Date(post.createdAt)
    }))
  },

  insertPost(text) {
    return axios.post(url, {
      text
    })
  },

  deletePost(id) {
    return axios.delete(`${url}${id}`)
  }
}
