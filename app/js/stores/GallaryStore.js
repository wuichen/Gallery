var Reflux = require('reflux');
var GallaryActions = require('../actions/GallaryActions');
var arts = [{"id":0,"picture":"http://lorempixel.com/300/200","text":"eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac"},{"id":1,"picture":"http://lorempixel.com/600/500","text":"dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis"},{"id":2,"picture":"http://lorempixel.com/500/400","text":"in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui"},{"id":3,"picture":"http://lorempixel.com/300/500","text":"amet risus nullam eget felis eget nunc"},{"id":4,"picture":"http://lorempixel.com/400/300","text":"nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed"},{"id":5,"picture":"http://lorempixel.com/500/400","text":"massa placerat duis ultricies lacus"},{"id":6,"picture":"http://lorempixel.com/500/600","text":"auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt"},{"id":7,"picture":"http://lorempixel.com/500/600","text":"ultricies mi quis hendrerit"},{"id":8,"picture":"http://lorempixel.com/200/200","text":"id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna"},{"id":9,"picture":"http://lorempixel.com/400/600","text":"vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget"},{"id":10,"picture":"http://lorempixel.com/400/300","text":"ultrices mi tempus imperdiet nulla malesuada pellentesque"},{"id":11,"picture":"http://lorempixel.com/300/600","text":"faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum"},{"id":12,"picture":"http://lorempixel.com/500/400","text":"semper feugiat nibh sed pulvinar proin gravida hendrerit lectus"},{"id":13,"picture":"http://lorempixel.com/400/200","text":"elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus"},{"id":14,"picture":"http://lorempixel.com/300/200","text":"vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam"},{"id":15,"picture":"http://lorempixel.com/600/200","text":"tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget"},{"id":16,"picture":"http://lorempixel.com/200/500","text":"amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non"},{"id":17,"picture":"http://lorempixel.com/200/600","text":"nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu"},{"id":18,"picture":"http://lorempixel.com/400/300","text":"viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu"},{"id":19,"picture":"http://lorempixel.com/500/600","text":"mattis enim ut tellus elementum sagittis vitae et leo duis ut diam"},{"id":20,"picture":"http://lorempixel.com/200/500","text":"pulvinar etiam non quam lacus suspendisse"},{"id":21,"picture":"http://lorempixel.com/500/600","text":"ipsum dolor sit amet consectetur adipiscing elit"},{"id":22,"picture":"http://lorempixel.com/600/300","text":"dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque"},{"id":23,"picture":"http://lorempixel.com/300/200","text":"nibh sed pulvinar proin gravida hendrerit lectus"},{"id":24,"picture":"http://lorempixel.com/600/300","text":"consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet"},{"id":25,"picture":"http://lorempixel.com/600/600","text":"massa sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa"},{"id":26,"picture":"http://lorempixel.com/400/600","text":"maecenas accumsan lacus vel facilisis"},{"id":27,"picture":"http://lorempixel.com/500/300","text":"turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis"},{"id":28,"picture":"http://lorempixel.com/600/400","text":"feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio"},{"id":29,"picture":"http://lorempixel.com/600/400","text":"aliquam purus sit amet luctus venenatis"},{"id":30,"picture":"http://lorempixel.com/300/400","text":"nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi"},{"id":31,"picture":"http://lorempixel.com/400/500","text":"enim neque volutpat ac tincidunt vitae"},{"id":32,"picture":"http://lorempixel.com/300/300","text":"pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis"},{"id":33,"picture":"http://lorempixel.com/300/400","text":"diam quis enim lobortis scelerisque fermentum dui faucibus"},{"id":34,"picture":"http://lorempixel.com/600/300","text":"posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus"},{"id":35,"picture":"http://lorempixel.com/400/600","text":"ultrices sagittis orci a scelerisque purus semper"},{"id":36,"picture":"http://lorempixel.com/600/600","text":"sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae"},{"id":37,"picture":"http://lorempixel.com/600/300","text":"ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa"},{"id":38,"picture":"http://lorempixel.com/200/300","text":"mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin"},{"id":39,"picture":"http://lorempixel.com/300/300","text":"consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim diam vulputate"},{"id":40,"picture":"http://lorempixel.com/300/500","text":"sit amet volutpat consequat mauris nunc congue nisi vitae"},{"id":41,"picture":"http://lorempixel.com/500/300","text":"proin sed libero enim sed faucibus"},{"id":42,"picture":"http://lorempixel.com/200/600","text":"morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis"},{"id":43,"picture":"http://lorempixel.com/400/500","text":"nullam vehicula ipsum a arcu cursus vitae congue"},{"id":44,"picture":"http://lorempixel.com/300/300","text":"non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas"},{"id":45,"picture":"http://lorempixel.com/200/300","text":"eu tincidunt tortor aliquam nulla facilisi cras"},{"id":46,"picture":"http://lorempixel.com/400/300","text":"volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at"},{"id":47,"picture":"http://lorempixel.com/200/500","text":"arcu bibendum at varius vel pharetra vel turpis nunc eget lorem dolor sed viverra ipsum"},{"id":48,"picture":"http://lorempixel.com/400/500","text":"enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla"},{"id":49,"picture":"http://lorempixel.com/500/600","text":"cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt"},{"id":50,"picture":"http://lorempixel.com/200/600","text":"est pellentesque elit ullamcorper dignissim cras"},{"id":51,"picture":"http://lorempixel.com/600/300","text":"accumsan lacus vel facilisis volutpat est velit"},{"id":52,"picture":"http://lorempixel.com/500/400","text":"sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque"},{"id":53,"picture":"http://lorempixel.com/400/500","text":"est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt"},{"id":54,"picture":"http://lorempixel.com/600/400","text":"sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus"}];

var GallaryStore = Reflux.createStore({
    listenables: [GallaryActions],
    init: function() {
        this.showingArt = 0;
        this.arts = [];
        this.hasMore = true;
        this.page = 0;
        this.firstImage = arts[0];
    },
    onLoadMoreArts() {
        for(var i=0; i < 1; i++){
            if(arts.length != 0){
                var art = arts[i];
                arts.splice(0,1);
                this.arts.push(art);
                console.log(art);
            }else{
                this.trigger({
                    hasMore: false
                })
            }
        }

        this.trigger({
            arts: this.arts,
            page: this.page + 1
        });
    },

    onSwitchArt(select) {
        this.showingArt = select; 
        this.trigger({
            showingArt: this.showingArt
        });
    },

    getInitialState() {
        return {arts : this.arts, hasMore: this.hasMore, page: this.page, showingArt: this.showingArt, firstImage: this.firstImage};
    }
});

module.exports = GallaryStore;