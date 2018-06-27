import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorItem from '../ColorItem/ColorItem';

const mapReduxStateToProps = ( reduxState ) => ({
    colors: reduxState.secondReducer
  })

  class ColorList extends Component {
    render(){
        console.log( 'Rendering ColorList' );
        return (
            <div>
                <ul>
                    { this.props.colors.map( ( color, i)  => {
                        return <ColorItem key={ i } color={ color } />
                    })}
                </ul>
            </div>
        )
    }
}
export default connect( mapReduxStateToProps )( ColorList );
