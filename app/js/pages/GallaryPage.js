
var React         = require('react/addons');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');
var Reflux = require('reflux');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var GallaryStore = require('../stores/GallaryStore');
var GallaryActions = require('../actions/GallaryActions');
var PackeryMixin = require('react-packery-mixin');
var InfiniteScroll = require('react-infinite-scroll')(React);
var AnimateMixin = require('react-animate');

var Art = require('../components/Art');

var packeryOptions = {};

var GallaryPage = React.createClass({

    mixins: [Reflux.connect(GallaryStore), PackeryMixin('packeryContainer', packeryOptions), AnimateMixin],
      
    getLoaderElement() {
        return null;

        return (
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <div className='thumbnail article text-center'>Loading <i className='fa fa-cog fa-spin'></i></div>
            </div>
        );
    },
    loadMoreArts() {
        GallaryActions.loadMoreArts();
    },
    nextImage() {
        if(this.state.showingArt + 1 < this.state.arts.length  ){
            GallaryActions.switchArt(this.state.showingArt + 1);
            this.fadeInOut();
        }

    },
    previousImage() {
        if(this.state.showingArt - 1 >= 0){
            GallaryActions.switchArt(this.state.showingArt - 1);
            this.fadeInOut();
        }
    },
    selectImage(art) {
        GallaryActions.switchArt(art.id);
        this.fadeInOut();
    },
    fadeInOut(){
        var that = this;
        $(".showingArtImage").fadeOut(1000, function() {
            $(".showingArtImage").attr("src", that.state.arts[that.state.showingArt].picture);
        }).fadeIn(1000);
    },
    render() {
        return (

        	<DocumentTitle title="Gallery">
                
	        	<div className='container'>
                <div className='display'> 

                        <div className='thumbnail article showingArt'>
                            <img src={this.state.firstImage.picture} className='showingArtImage'></img>
                            <hr />
                            <p className='text'>{this.state.firstImage.text}</p>
                            <div className='previousButton btn-primary' onClick={this.previousImage} >
                                Previous
                            </div >
                            <div className='nextButton btn-primary' onClick={this.nextImage}>
                                Next
                            </div>
                        </div>
                
                </div>

                <div className='row gallary'>
                    <div>
                        <InfiniteScroll ref='packeryContainer' pageStart={this.state.page} loader={this.getLoaderElement()} loadMore={this.loadMoreArts} hasMore={this.state.hasMore} >

                            {this.state.arts.map(function(art) {
                                var focus = false;
                                if(this.state.showingArt == art.id){
                                    focus = true;
                                }else{
                                    focus = false;
                                }
                                var boundClick = this.selectImage.bind(this, art);

                              return (
                                    <Art key={art.id}
                                        picture={art.picture}
                                        text={art.text}
                                        focus={focus}
                                        onClick={boundClick}
                                    />
                                );
                            }.bind(this))}
                        </InfiniteScroll>
                    </div>
                </div>
            </div>

        	</DocumentTitle>

        );
    }
})

module.exports = GallaryPage;