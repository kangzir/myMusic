<template>
  <div class="w" v-if="playlist">
    <top-info :playlist="playlist" />
    <tab-conten @btncomments="btncomments" :total="commentsTotal" :comments="comments" :playlist="playlist"/>
  </div>
</template>

<script>
import {getPlaylist,getComment} from '../../network/DetailsRecommend'
import TopInfo from './childDetailsRecommend/TopInfo'
import TabConten from './childDetailsRecommend/TabConten'
  export default {
    name:'DetailsRecommend',
    components:{
      TopInfo,
      TabConten,
    },
    data() {
      return {
        id:null,
        playlist:null,
        comments:null,
        commentsTotal:null
      }
    },
    created () {
      this.id = this.$route.params.id
      this._getPlaylist()
      // 评论
      this._getComment(this.id,10,0)
    },
    methods: {
      _getPlaylist(){
        getPlaylist(this.id).then( res =>{
          console.log(res);
          this.playlist = res.playlist
        })
      },
      _getComment(id,limit,offset){
        getComment(id,limit,offset).then( res =>{
          // console.log(res);
          this.comments = res.comments
          this.commentsTotal = res.total
        })
      },
      btncomments(page){
        this._getComment(this.id,10,(page-1)*10)
        console.log(page);
      }
    },

  }
</script>


<style scoped lang="less">
.w{
  width: 1160px;
  margin: 0 auto;
}
</style>