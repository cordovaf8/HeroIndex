import React from 'react';

export default class CarouselSlide extends React.Component {
    render() {
        const { children, id } = this.props;
        return (
            <div id={id} className="vm-carousel-slide">
                {children}
            </div>
        );
    }
}