import classNames from "classnames";

type Props = {
    canScrollPrev: boolean;
    canScrollNext: boolean;
    onPrev(): void;
    onNext(): void;
};
const CarouselControls = (props: Props) => {
    return (
        <>
            <div className="flex lg:justify-end gap-2 justify-center">
                <button
                    onClick={() => {
                        if (props.canScrollPrev) {
                            props.onPrev();
                        }
                    }}
                    disabled={!props.canScrollPrev}
                    className={classNames({
                        "px-4 py-2 text-white rounded-md": true,
                        "bg-indigo-200": !props.canScrollPrev,
                        "bg-indigo-400": props.canScrollPrev,
                    })}
                >
                    Préc.
                </button>
                <button
                    onClick={() => {
                        if (props.canScrollNext) {
                            props.onNext();
                        }
                    }}
                    disabled={!props.canScrollNext}
                    className={classNames({
                        "px-4 py-2 text-white rounded-md": true,
                        "bg-indigo-200": !props.canScrollNext,
                        "bg-indigo-400": props.canScrollNext,
                    })}
                >
                    Suiv.
                </button>
            </div>
        </>
    );
};
export default CarouselControls;