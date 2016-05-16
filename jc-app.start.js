angular.module('Eggly', [

	])
.controller('MainCtrl',function($scope){
	$scope.options =[
	{"id": 0, "name": "SLURM"},
	{"id": 1, "name": "PBS"}
	];


     
     $scope.ques =[
     {"id":0, "name":"all*", "nodelim": 6},
     {"id":1, "name":"jerlab", "nodelim": 6},
     {"id":2, "name":"largemem", "nodelim":1},
     {"id":2, "name":"K20X", "nodelim":1},
     {"id":3, "name":"DDLAB", "nodelim":1},
     {"id":4, "name":"delab","nodelim":1},
     {"id":5, "name":"smp","nodelim":1},
     {"id":5, "name":"default"}
     ]; 

     $scope.pbsques =[
     {"id":0, "name":"song", "nodelim":10},
     {"id":1, "name":"default", "nodelim":64},
     {"id":2, "name":"flora", "nodelim":20},
     {"id":3, "name":"gen2", "nodelim":6},
     {"id":4, "name":"star", "nodelim":10},
     {"id":5, "name":"mark", "nodelim":20},
     {"id":6, "name":"vasp", "nodelim":20},
     {"id":7, "name":"svm", "nodelim":20},
     {"id":9, "name":"planck", "nodelim":64},
     {"id":10, "name":"m2070", "nodelim":64},
     {"id":11, "name":"m1060", "nodelim":64},
     {"id":12, "name":"phi", "nodelim":64}
     ];

     $scope.slurmmodule =[
     {"id":0, "name":"afni/2014"},
     {"id":1, "name":"amos/3.1"},
     {"id":2, "name":"ants/1.9"},
     {"id":3, "name":"bamtools/2013"},
     {"id":4, "name":"bioperl/1.6.1"},
     {"id":5, "name":"bowtie2/2.2.4"},
     {"id":6, "name":"broadpipeline/2015"},
     {"id":7, "name":"checkm/0.9.5"},
     {"id":8, "name":"cmake/3.0"},
     {"id":9, "name":"cuda/5.5"},
     {"id":10, "name":"fastqc/0.11"},
     {"id":11, "name":"fsl/fsl"},
     {"id":12, "name":"gpaw/0.10"},
     {"id":13, "name":"intel/14.0.3"},
     {"id":14, "name":"intel/2015"},
     {"id":15, "name":"matlab/R2014a"},
     {"id":16, "name":"mothur/1.33"},
     {"id":17, "name":"mpich/3.0.4/14.10"},
     {"id":18, "name":"netcdf/4.3.2"},
     {"id":19, "name":"netcdf/netcdf-ifort"},
     {"id":20, "name":"pgi/14.10"},
     {"id":21, "name":"pgi/2014"},
     {"id":22, "name":"python/2.6.9"},
     {"id":23, "name":"python/2.7.8"},
     {"id":24, "name":"python/anaconda"},
     {"id":25, "name":"R/3.1.2"},
     {"id":26, "name":"samtools/1.2"},
     {"id":27, "name":"star/2.4"},
     {"id":28, "name":"subreads/1.4.6"},
     {"id":29, "name":"tcl/8.6.1"},
     {"id":30, "name":"test/R2014b-mcnair"},
     {"id":31, "name":"tophat/2.0.13"}
     ];

     
     $scope.pbsmodule =[
     {"id":0, "name":"454/2.8"},
     {"id":1, "name":"ace/2014"},
     {"id":2, "name":"amos/3.1"},
     {"id":3, "name":"ant/1.9.3"},
     {"id":4, "name":"armadillo/4.400"},
     {"id":5, "name":"autoconf/2.6"},
     {"id":6, "name":"bioperl/1.6"},
     {"id":7, "name":"bioperl/1.6.test"},
     {"id":8, "name":"blasr/2012"},
     {"id":9, "name":"blast/2.2.29"},
     {"id":10, "name":"bowtie/1.1"},
     {"id":11, "name":"bowtie/2.1"},
     {"id":12, "name":"circos/2014"},
     {"id":13, "name":"coawst/2014"},
     {"id":14, "name":"cuda/6.0"},
     {"id":15, "name":"emirge/2014"},
     {"id":16, "name":"fsl/2014"},
     {"id":17, "name":"fsl/gpu"},
     {"id":18, "name":"g09/C.01"},
     {"id":19, "name":"gamess/13"},
     {"id":20, "name":"gams/24.3.2"},
     {"id":21, "name":"gap/4r7"},
     {"id":22, "name":"gcc/4.4.7"},
     {"id":23, "name":"gcc/4.9"},
     {"id":24, "name":"gcc/4.9.1"},
     {"id":25, "name":"gromacs/5.0.4"},
     {"id":26, "name":"gsl/1.16"},
     {"id":27, "name":"hdf5/1.8.12"},
     {"id":28, "name":"homer/4.6"},
     {"id":29, "name":"intel/13.1.0"},
     {"id":30, "name":"java/1.7"},
     {"id":31, "name":"java/1.8 "},
     {"id":32, "name":"libtool/2.4.2"},
     {"id":33, "name":"masurca/2014"},
     {"id":34, "name":"matlab/R2014a"},
     {"id":35, "name":"mothur/1.33"},
     {"id":36, "name":"mpich/3.0.4/14.10"},
     {"id":37, "name":"mummer/3.23"},
     {"id":38, "name":"namd/2.9"},
     {"id":39, "name":"netlogo/5.0.5"},
     {"id":40, "name":"nwchem/6.5"},
     {"id":41, "name":"openfoam/2.2"},
     {"id":42, "name":"openfoam/2.3"},
     {"id":43, "name":"pandaseq/2014"},
     {"id":44, "name":"pgi/14.10"},
     {"id":45, "name":"pgi/2014"},
     {"id":46, "name":"pgi64/14.10"},
     {"id":47, "name":"pgi64/2014"},
     {"id":48, "name":"python/2.7.3"},
     {"id":49, "name":"python/2.7.5"},
     {"id":50, "name":"python/2.7.6"},
     {"id":51, "name":"python/2.7.8"},
     {"id":52, "name":"python/anaconda"},
     {"id":53, "name":"qiime/1.8"},
     {"id":54, "name":"quast/2.2"},
     {"id":55, "name":"R/3.0.1"},
     {"id":56, "name":"R/3.1.0"},
     {"id":57, "name":"samtools/2014"},
     {"id":58, "name":"sap/1.0.6"},
     {"id":59, "name":"soap/2.21"},
     {"id":60, "name":"spades/3.1.1"},
     {"id":61, "name":"sqlite/3.8.4.3"},
     {"id":62, "name":"stan/1.3"},
     {"id":63, "name":"tophat/2.0.13"},
     {"id":64, "name":"trinity/2.0.6"},
     {"id":65, "name":"vasp/5.3_beef"},
     {"id":66, "name":"vasp/5.3_mpi"},
     {"id":67, "name":"vasp/5.3_serial"},
     {"id":68, "name":"wgs/7.0"},
     {"id":69, "name":"wgs/8.1"},
     {"id":70, "name":"zlib/2014"}

     ];
     
     $scope.modsselected=[    
    
     ];

     $scope.addMod = function(mod){
          $scope.modsselected.push({ mod });
     
     }
     
     $scope.removeMod = function(){
         $scope.modsselected.pop(); 
     }




     $scope.checkboxModel = {
       value1 : true
     };

	
});