// From github.com/p5-types/p5.ts

import p5 from 'p5';
import React from 'react';

export interface IProps {
  sketch: (sketch: p5) => void;
  onP5Changed?: (sketch: p5) => void;
}

export default class P5Wrapper extends React.Component<IProps, {}> {
  public canvas!: p5;
  private wrapper: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props: IProps) {
    super(props);
  }

  public componentDidMount() {
    this.setSketch();
  }

  public componentDidUpdate(prevProps, prevState) {
    if (prevProps.sketch !== this.props.sketch) {
      this.setSketch();
    }
  }

  public render() {
    return <div ref={this.wrapper} />;
  }

  private setSketch() {
    const current = this.wrapper.current;
    if (current) {
      if (current.childNodes[0]) {
        current.removeChild(current.childNodes[0]);
      }
      this.canvas = new p5(this.props.sketch, current);
      if (this.props.onP5Changed) {
        this.props.onP5Changed(this.canvas);
      }
    }
  }
}
