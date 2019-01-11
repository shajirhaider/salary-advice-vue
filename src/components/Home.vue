<template>
    <div class="row justify-content-center">
        <div class="col-md-8 col-12 col-sm-6">
           
            <div class="panel">
                <div class="wait-message" >
                    <div v-if="loader == true">
                    <span class="lds-dual-ring"></span>
                    <span> Please Wait. Advice is Generating.</span>
                    </div>
                </div>
                <div>
                <div class="form-group row nopadding">
                    <span class="col-3  col-form-label text-left">Month</span>
                    <model-list-select class="form-control-sm col-9" v-model="advice.month" :list="monthList" option-value="month" optionText="month" placeholder="Select Month"/>
                </div>
                <div class="form-group row nopadding">
                    <span class="col-3 text-left">Pay through</span>
                    <div class="form-check col-3 text-left">
                        <input type="radio" class="form-check-input" v-model="advice.payThrough" value="Bank" @input="wingShow = false, refShow = true">
                        <label class="form-check-label" >Bank</label>
                    </div>
                    <div class="form-check col-3 text-left">
                        <input type="radio" class="form-check-input" v-model="advice.payThrough" value="Cheque" @input="wingShow = true, refShow = false, advice.refNo = ''" >
                        <label class="form-check-label" >Cheque</label>
                    </div>
                    <div class="form-check col-3 text-left">
                        <input type="radio" class="form-check-input" v-model="advice.payThrough" value="Cash"  @input="wingShow = true, refShow = false, advice.refNo = '' " >
                        <label class="form-check-label" >Cash</label>
                    </div>
                </div>
                <div class="form-group row nopadding" v-if="wingShow == false">
                    <span class="col-3 text-left">Filter</span>
                    <div class="form-check col-3 text-left">
                        <input type="radio" class="form-check-input" v-model="advice.filter" value="None" >
                        <label class="form-check-label" >None</label>
                    </div>
                    <div class="form-check col-3 text-left">
                        <input type="radio" class="form-check-input" v-model="advice.filter" value="BdREN">
                        <label class="form-check-label" >BdREN</label>
                    </div>
                    <div class="form-check col-3 text-left">
                        <input type="radio" class="form-check-input" v-model="advice.filter" value="SoftwareServices">
                        <label class="form-check-label" >Software Services</label>
                    </div>
                </div>

                <div class="form-group row nopadding" v-if="wingShow == true">
                    <span class="col-3  col-form-label text-left">Wing</span>
                    <model-list-select class="form-control-sm col-9" v-model="advice.wing" :list="wingList" option-value="wing" optionText="wing" placeholder="Select Wing"/>
                </div>
                 <div class="form-group row nopadding" v-if="refShow == true">
                    <span class="col-3  col-form-label text-left">Ref No.</span>
                    <input class="form-control col-9 ref" v-model="advice.refNo" placeholder="Enter Ref No"/>
                </div>
            </div>
            </div>
            <div class="mt-3 text-right">
                <button class="btn btn-primary btn-sm ripple mr-3" :disabled='disable' @click="getAdvice()">
                    Generate Advice
                </button>
                 <router-link class="btn btn-primary btn-sm ripple" :to="{name:'Login'}" >
                     Log Out
                 </router-link>
            </div>   
        </div>
    </div>
</template>

<script>

import { ModelListSelect} from 'vue-search-select';
import {url} from "@/utils/urls";
import {constant} from "@/utils/constant";
import {client} from "@/utils/client";

export default {
     components: {
      ModelListSelect
    },
    data(){
        return{
            monthList:[
                { month:  'Sep18' },
                { month : 'Oct18' },
                { month : 'Nov18' },
                { month : 'Dec18' },
                { month : 'Jan19' },
                { month : 'Feb19' },
                { month : 'Mar19' }
            ],
            advice: {
                "month" : "",
                "payThrough" : "",
                "filter" : "None",
                "wing" : "",
                "refNo":""
            },
            wingShow: false,
            refShow: false,
            loader: false,
            wingList:[
                { wing:  'Acquisition' },
                { wing : 'Delivery' },
                { wing : 'Operations' }
            ]
        }

    },
    computed:{
        disable(){
            if(this.advice.month == "" || this.advice.payThrough == "" || (this.advice.refNo == "" && this.advice.wing == "")){
                return true
            }
        }
    },
    methods:{
        getAdvice(){
            console.log(this.advice)
            this.loader = true
            let body = this.advice
            let req = constant.getRequest(url.get_advice,body);
            client.onPost(url.get_advice, req)
             .then((response) => {
                 console.log(response.status)
                if(response.status == 200){    
                const file = new Blob( [response.data], {type: 'application/pdf'} );
                const fileURL = URL.createObjectURL(file);
                window.open(fileURL);
                this.loader = false
                URL.revokeObjectURL(file)
                }
                   
                   
            }).catch(error =>{
                console.log(error)
            });
        }

    }
    
}
</script>

<style scoped>
.ref::placeholder{
    color:#CDCDCD;
    font-size: 14px
}
.wait-message{
    height:35px;
    color: #009688
}
.lds-dual-ring {
  display: inline-block;
  width: 20px;
  height:20px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 20px;
  height: 20px;
  /* margin: 1px; */
  margin-right: 1px;
  border-radius: 50%;
  border: 5px solid #009688;
  border-color: #009688 transparent #009688 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>


