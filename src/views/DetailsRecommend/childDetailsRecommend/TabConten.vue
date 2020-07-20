<template>
  <div>
    <el-tabs tab-position="top" style="height: 200px;">
      <el-tab-pane label="歌曲列表">

        <el-table  class="table-box" :data="playlist.tracks">
          <el-table-column type="index"></el-table-column>
          <el-table-column prop="al.picUrl">
            <template slot-scope="scope">
              <div @click="fangyy(scope.row.id)" class="img-box" >
                <img :src="scope.row.al.picUrl">
                <p class="img-icon"><i class="iconfont icon-bofang"></i></p>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="音乐标题" prop="name"></el-table-column>
          <el-table-column label="歌手" prop="ar[0].name"></el-table-column>
          <el-table-column label="专辑" prop="al.name"></el-table-column>
          <el-table-column label="时长" prop="">
            <template slot-scope="scope">
              {{scope.row.dt|formatDuration}}
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane :label="`评论(${total})`">
        <h3>最新评论({{total}})</h3>
        <div class="comments-box">
          <div v-for="(item, index) in comments" :key="index">
            <img :src="item.user.avatarUrl" alt="">
            <div>
              <p>
                <span>{{item.user.nickname}}:</span>
                <span>{{item.content}}</span>
              </p>
              <!-- 回复的内容 -->
              <div v-for="(beReplieditem, index) in item.beReplied" :key="index">
                <img :src="beReplieditem.user.avatarUrl">
                <p>
                  <span>{{beReplieditem.user.nickname}}:</span>
                  <span>{{beReplieditem.content}}</span>
                </p>
              </div>
              <p>{{item.time|moment}}</p>
            </div>
          </div>
        </div>
        <el-pagination
         class="pagination-box"
          @current-change="handleCurrentChange"
          :current-page="1"
          layout="prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import {getSong} from '../../../network/playsong'
  export default {
    name:'',
    props:['playlist','comments','total'],
    methods: {
      handleCurrentChange(page){
        this.$emit('btncomments',page)
      },
      fangyy(id){
        getSong(id).then( res =>{
          this.$bus.$emit('songurl',res.data[0].url)
        })
      }
    },
  }
</script>


<style scoped lang="less">
.table-box{
  .img-box{
    position: relative;
    width: 60px;
    cursor: pointer;
    img{
      width: 100%;
      border-radius: 10px;
    }
    .img-icon{
      position: absolute;
      top:10%;
      right: 50%;
      transform: translateX(50%);
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      height: 20px;
      width: 20px;
      i{
        position: absolute;
        left: 40%;
        top: 50%;
        color: #fff;
        transform: translate(-50%,-50%);
        font-size: 13px;
        margin-left: 3px;
      }
    }
  }


}

.comments-box{
  >div{
    min-height: 100px;
    display: flex;
    // align-items: center;
    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    >div{
      margin-left: 10px;
      border-bottom: 1px solid rgb(231, 231, 231);
      width: 100%;
      p:nth-child(1){
        font-size: 15px;
        span:nth-child(1){
          color: royalblue;
          margin-right: 7px;
        }
        span:nth-child(2){
          font-size: 14px;
        }
      }
      
      p:nth-of-type(2){
        font-size: 14px;
        color: silver;
      }
      >div{
        display: flex;
        align-items: center;
        background-color: rgb(230, 229, 230);
        border-radius: 10px;
        img{
          width: 30px;
          height: 30px;
          margin-left: 10px;
        }
        p{
          margin-left: 10px;
          span:nth-child(1){
            color: royalblue;
            margin-right: 7px;
            font-size: 13px;
          }
        }
      }
    }
  }
}
.pagination-box{
  transform: translateX(40%);
  margin-top: 30px !important;
  margin-bottom: 20px !important;
}
</style>