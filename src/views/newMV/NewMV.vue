<template>
  <div>
    <div class="top-text-box">
      <div class="tiqv-box">
        <span>地区:</span>
        <p 
        :class="{activea:cerrindex1 == index}"
        @click="diqvbtn(index,item)"
        v-for="(item, index) in diqv" :key="index">{{item}}</p>
      </div>
      <div class="type-box">
        <span>类型:</span>
        <p 
        :class="{activea:cerrindex2 == index}"
        @click="typebtn(index,item)"
        v-for="(item, index) in type" :key="index">{{item}}</p>
      </div>
      <div class="paixv-box">
        <span>排序:</span>
        <p 
        :class="{activea:cerrindex3 == index}"
        @click="paixvbtn(index,item)"
        v-for="(item, index) in paixv" :key="index">{{item}}</p>
      </div>
    </div>
    <imgitem :item="imgitem"/>
      <el-pagination
      class="page-box"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-size="1"
        layout=" prev, pager, next, jumper"
        :total="30">
      </el-pagination>
  </div>
</template>


<script>//imgitem
import imgitem from './childNewMV/imgitem'
import {getMVAll} from '../../network/NewMV'
  export default {
    name:'',
    components: {
      imgitem,
    },
    data() {
      return {
        diqv:['全部','内地','港台','欧美','日本','韩国'],
        type:['全部','官方版','原生','现场版','网易出品'],
        paixv:['上升最快','最热','最新'],

        cerrindex1:0,
        cerrindex2:0,
        cerrindex3:0,
        imgitem:null,
        currentPage4:1
      }
    },
    created() {
      this._getMVAll()

    },
    methods: {
      _getMVAll(area,type,order,limit,offset){
        getMVAll(area,type,order,limit,offset).then( res =>{
          console.log(res);
          this.imgitem = res.data
        })
      },
      diqvbtn(i,t){
        this.cerrindex1 = i
        this._getMVAll(t)
      },
      typebtn(i,t){
        this.cerrindex2 = i
        this._getMVAll('内地',t,'上升最快')
      },
      paixvbtn(i,t){
        this.cerrindex3 = i
        this._getMVAll('内地','原声',t)
      },
      handleCurrentChange(page){
        this._getMVAll('全部','全部','上升最快',20,(page-1)*20,0)
      }
    },
  }
</script>


<style scoped lang="less">
.top-text-box{
  margin-left: 80px;
  span{
    line-height: 55px;
  }
  p{
    margin: 0;
    padding: 5px 10px;
    margin: 10px 20px;
    width: 80px;
    text-align: center;
    color: #8090b5;
    border-radius: 30px;
    font-size: 14px;
    line-height: 25px;
    cursor: pointer;
  }
  .tiqv-box{
    display: flex;
  }
  .type-box{
    display: flex;
  }
  .paixv-box{
    display: flex;
  }
}
.activea{
    background-color: #fcf6f5 !important;
    color: #dd6d60 !important;
}
.page-box{
  margin-left: 400px;
  margin-top: 40px;
  margin-bottom: 20px;
}
</style>