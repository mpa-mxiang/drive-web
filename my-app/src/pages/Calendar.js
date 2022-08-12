import React, { Component, useState } from "react";
import { PropTypes } from "prop-types";
import Scheduler, {
    SchedulerData,
    ViewTypes,
    DATE_FORMAT
} from "react-big-scheduler";
import moment from "moment";
import "moment/locale/fr";
import Datas from "./Datas";
import Paypal from "./Paypal";
import withDragDropContext from "./withDnDContext";
import "react-big-scheduler/lib/css/style.css";
import Col from "antd/lib/col";
import Row from "antd/lib/row";

class Booking extends Component {
    constructor(props) {
        super(props);

        let schedulerData = new SchedulerData(
            new moment().format(DATE_FORMAT),
            ViewTypes.Week,
            false,
            false,
            {
                views: [
                    {
                        viewName: "Hebdomadaire",
                        viewType: ViewTypes.Week,
                        showAgenda: false,
                        isEventPerspective: false
                    },
                    {
                        viewName: "Mensuel",
                        viewType: ViewTypes.Month,
                        showAgenda: false,
                        isEventPerspective: false
                    }
                ],
                nonAgendaOtherCellHeaderFormat: "ddd D/M",
                resourceName: "Spa",
                schedulerWidth: "70%",
                startResizable: false,
                endResizable: false,
                movable: false,
                creatable: false
            }
        );
        //set locale moment to the schedulerData, if your locale isn't English. By default, Scheduler comes with English(en, United States).
        moment.locale("fr");
        schedulerData.setLocaleMoment(moment);
        let booked = ["1-14", "1-3", "3-1", "12-4"];
        schedulerData.setResources(Datas.resources);
        schedulerData.setEvents(Datas.events);
        this.changeColor(schedulerData, booked);
        this.state = {
            viewModel: schedulerData,
            booked: booked
        };
    }

    render() {
        const { viewModel } = this.state;

        return (
            <div>
                <h1 className="products">Booking</h1>
                <Scheduler
                    schedulerData={viewModel}
                    prevClick={this.prevClick}
                    nextClick={this.nextClick}
                    onSelectDate={this.onSelectDate}
                    onViewChange={this.onViewChange}
                    eventItemClick={this.eventClicked}
                    viewEventClick={this.ops1}
                    viewEventText="Voir photos"
                    viewEvent2Text="Réserver"
                    viewEvent2Click={this.ops2}
                    toggleExpandFunc={this.toggleExpandFunc}
                    eventItemPopoverTemplateResolver={
                        this.eventItemPopoverTemplateResolver
                    }
                />
            </div>
        );
    }

    eventItemPopoverTemplateResolver = (
        schedulerData,
        eventItem,
        title,
        start,
        end,
        statusColor
    ) => {
        return (
            <div style={{ width: "300px" }}>
                <Row type="flex" align="middle">
                    <Col span={2}>
                        <div
                            className="status-dot"
                            style={{ backgroundColor: statusColor }}
                        />
                    </Col>
                    <Col span={22} className="overflow-text">
                        <span className="header2-text" title={title}>
                            {title}
                        </span>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span={2}>
                        <div />
                    </Col>
                    <Col span={22}>
                        <span className="header1-text">
                            {start.format("HH:mm")} - {end.format("HH:mm")}
                        </span>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    {eventItem.bgColor === "green" ? (
                        <div className="payment-div">
                            <Paypal />
                        </div>
                    ) : (
                        <div></div>
                    )}
                </Row>
            </div>
        );
    };

    prevClick = (schedulerData) => {
        schedulerData.prev();
        schedulerData.setEvents(Datas.events);
        this.changeColor(schedulerData, this.state.booked);
        this.setState({
            viewModel: schedulerData
        });
    };

    nextClick = (schedulerData) => {
        schedulerData.next();
        schedulerData.setEvents(Datas.events);
        this.changeColor(schedulerData, this.state.booked);
        this.setState({
            viewModel: schedulerData
        });
    };

    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(
            view.viewType,
            view.showAgenda,
            view.isEventPerspective
        );
        schedulerData.setEvents(Datas.events);
        this.changeColor(schedulerData, this.state.booked);
        this.setState({
            viewModel: schedulerData
        });
    };

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        schedulerData.setEvents(Datas.events);
        this.changeColor(schedulerData, this.state.booked);
        this.setState({
            viewModel: schedulerData
        });
    };

    eventClicked = (schedulerData, event) => {
        alert(
            `You just clicked an event: {id: ${event.id}, title: ${event.title}}`
        );
    };

    toggleExpandFunc = (schedulerData, slotId) => {
        schedulerData.toggleExpandStatus(slotId);
        this.setState({
            viewModel: schedulerData
        });
    };

    changeColor(schedulerData, booked) {
        schedulerData.events.forEach((element) => {
            if (
                moment().endOf("day").add(1, "days").diff(element.start, "minutes") > 0
            ) {
                element.bgColor = "grey";
            } else if (booked.indexOf(element.id) > -1) {
                element.bgColor = "red";
            }
        });
    }
}

export default withDragDropContext(Calendar);


