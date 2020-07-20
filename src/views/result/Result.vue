<template>
  <div class="w">
    <h2 v-if="this.songCount" class="content">{{this.key}}<span>找到{{songCount}}个结果</span> </h2>
    <h2 v-else-if="this.playlistCount" class="content">{{this.key}}<span>找到{{playlistCount}}个结果</span> </h2>
    <h2 v-else class="content">{{this.key}}<span>找到{{mvCount}}个结果</span> </h2>
    <el-tabs v-model="name" :before-leave="tabsbtn" tab-position="top" style="height: 200px;">
      <el-tab-pane label="歌曲" name="1">
        <song 
        :songs="songList"
        :songCount="songCount"
        @songpage="songpage"
        />
      </el-tab-pane>
      <el-tab-pane label="歌单" name="1000">
        <playlist :playlists="playlists" 
        :playlistCount="playlistCount"
        @playlistsPage="playlistsPage" />
      </el-tab-pane>
      <el-tab-pane label="MV" name="1004">
        <mv @mvPage="mvPage" :item="[mvlist,mvCount]" ></mv>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {getResult} from '../../network/result'
import Song from './childresult/Song'
import Playlist from './childresult/Playlist'
import mv from './childresult/mv'
  export default {
    name:'result',
    components:{
      Song,
      Playlist,
      mv,
    },
    data() {
      return {
        key:'',
        name:'1',

        songList:null,
        songCount:null,

        playlists:null,
        playlistCount:null,

        mvlist:null,
        mvCount:null,
      }
    },
    created() {
      this.key = this.$route.params.key 

      this._getResult(this.key,15,0,1)
      
      this.$bus.$on('btnsosuo',(res) =>{
        
      this.key = this.$route.params.key 

          this.songList = res.result.songs
          this.songCount = res.result.songCount
          
          this.playlists = res.result.playlists
          this.playlistCount = res.result.playlistCount

          this.mvlist = res.result.mvs
          this.mvCount = res.result.mvCount
      })
    },
    methods: {
      _getResult(keywords,limit,offset,type){
        getResult(keywords,limit,offset,type).then( res =>{
          console.log(res);
          this.songList = res.result.songs
            this.songCount = res.result.songCount
            
            this.playlists = res.result.playlists
            this.playlistCount = res.result.playlistCount

            this.mvlist = res.result.mvs
            this.mvCount = res.result.mvCount
        })
      },
      // song 下一页
      songpage(page){
        this._getResult(this.key,15,page,1)
      },
      playlistsPage(page){
        this._getResult(this.key,15,page,1000)
      },
      mvPage(page){
        this._getResult(this.key,15,page,1004)
      },
      tabsbtn(nwename){
        console.log(this.key);
        this._getResult(this.key,15,0,nwename)
      }
    },
  }
</script>

<style scoped lang="less">
.w{
  width: 1160px;
  margin: 0 auto;
}
.content{
  font-size: 30px;
  span{
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
    color: rgb(198, 191, 199);
  }
}
</style>