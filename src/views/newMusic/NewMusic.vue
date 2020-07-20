<template>
  <div class="w">
    <div class="title-box">
      <p :class="{active:cerrIndex == index}" @click="btnSong(item.id,index)" v-for="(item, index) in tags" :key="index">
        {{item.name}}
      </p>
    </div>
      <el-table
        :data="Songlist"
        stripe
        style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <img @click="playSong(scope.row.id)" class="img-box"  :src="scope.row.album.blurPicUrl" alt="">
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="音乐标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="artists[0].name"
          label="歌手">
        </el-table-column>
        <el-table-column
          prop="name"
          label="专辑">
        </el-table-column>
        <el-table-column
          prop=""
          label="时长">
          <template slot-scope="scope">
            {{scope.row.duration | formatDuration}}
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
import {getNewSong} from '../../network/newMusic'
import {getSong} from '../../network/playsong'
  export default {
    name:'',
    data() {
      return {
        tags:[
          {name:'全部',id:0},
          {name:'华语',id:7},
          {name:'欧美',id:96},
          {name:'日本',id:8},
          {name:'韩国',id:16},
        ],
        Songlist:[],
        tims:[],
        cerrIndex :0 
      }
    },
    created() {
      this._getNewSong()
    },
    methods: {
      _getNewSong(id){
        getNewSong(id).then( res =>{
          this.Songlist = res.data
          console.log(res);
        })
      },
      btnSong(id,i){
        this.cerrIndex = i
        this._getNewSong(id)
      },
      playSong(id){
        getSong(id).then( res =>{
          this.$bus.$emit('songurl',res.data[0].url)
        })
      }
    },
    computed: {
    },
  }
</script>


<style lang="less">
.w{
  width: 1100px;
  margin: 0 auto;
}
.title-box{
  display: flex;
  justify-content: flex-end;
  p{
    margin: 0 5px;
    color: rgb(129, 132, 137);
    cursor: pointer;
  }
}
.active{
  color: rgb(221, 109, 122) !important;
}
.el-table__row{
  &:hover{
    .img-box{
      transition:all .5s;
      filter: blur(0px);
    }
  }
}
.img-box{
  width: 100px;
  border-radius: 10px;
  filter: blur(1px);
  cursor: pointer;
} 
</style>