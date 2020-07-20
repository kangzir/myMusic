<template>
  <div>
    <el-table
      :data="songs"
      stripe
      style="width: 100%"
      @row-click="playSong">
      <el-table-column type="index"></el-table-column>
      <el-table-column
        prop="name"
        label="音乐标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="artists[0].name"
        label="歌手"
        width="180">
      </el-table-column>
      <el-table-column
        prop="album.name"
        label="专辑">
      </el-table-column>
      <el-table-column
        prop=""
        label="时长">
        <template slot-scope="scope">
          {{scope.row.duration|formatDuration}}
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-size="15"
      background
      layout=" prev, pager, next, jumper"
      :total="songCount">
    </el-pagination>
  </div>
</template>


<script>
import {getSong} from '../../../network/playsong'
  export default {
    name:'song',
    props:['songs','songCount'],
    methods: {
      handleCurrentChange(page){
        this.$emit('songpage', page)
      },
      playSong(column){
        getSong(column.id).then( res =>{
          this.$bus.$emit('songurl',res.data[0].url)
        })
      }
    },
  }
</script>


<style lang="less">
.el-pagination{
  transform: translateX(25%);
  margin-top: 30px !important;
  margin-bottom: 20px !important;
}

.el-table__row{
  height: 100px;
}
</style>