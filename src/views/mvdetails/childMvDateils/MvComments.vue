<template>
  <div v-if="commentsmv" class="w">
    <div>
      <h2 v-if="commentsmv.hotComments">热门评论 ({{commentsmv.hotComments.length}})</h2>
      <div v-if="commentsmv.hotComments" class="hotcomments-box">
        <div v-for="(item, index) in commentsmv.hotComments" :key="index">
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
      <h2 v-if="commentsmv" >最新评论 ({{commentsmv.total}})</h2>
      <div v-if="commentsmv" class="comments-box">
        <div v-for="(item, index) in commentsmv.comments" :key="index">
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
        :total="commentsmv.total">
      </el-pagination>
    </div>
  </div>
</template>


<script>
  export default {
    name:'',
    props:['commentsmv'],
    methods: {
      handleCurrentChange(page){
        this.$emit('mvpage', page)
      }
    },
  }
</script>


<style scoped lang="less">
.w{
  width: 700px;
  float: left;
}
h2{
  font-weight: 500;
  margin: 40px 0px;
  margin-top: 0;
}
.hotcomments-box{
  >div{
    min-height: 100px;
    display: flex;
    width: 700px;
    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    >div{
      margin-left: 10px;
      margin-right: 10px;
      border-bottom: 1px solid rgb(231, 231, 231);
      // width: 100%;
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
          span:nth-child(2){
            font-size: 13px;
          }
        }
      }
    }
  }
}
.comments-box{
  width: 700px;
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
          span:nth-child(2){
            font-size: 13px;
          }
        }
      }
    }
  }
}
.pagination-box{
  margin:20px 0;
  margin-left: 200px;
}
</style>