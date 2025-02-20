import React from 'react';
import Table from '../../../../components/Table';
import cn from 'classnames';

import './style.scss';

const PeriodHighlight = ({ userData }) => {
  const { main, referrer, score } = userData;

  return (
    <>
      {main && (
        <div className="FoundingMembersPage__period-highlight__main">
          {main.icon ? (
            <img
              className="FoundingMembersPage__period-highlight__main__placeholder"
              src={main.icon}
              alt="icon of founding member"
            />
          ) : (
            <div className="FoundingMembersPage__period-highlight__main__placeholder"></div>
          )}
          <div className="FoundingMembersPage__period-highlight__main__data">
            <p className="FoundingMembersPage__period-highlight__main__name">{main.name}</p>
            <p className="FoundingMembersPage__period-highlight__main__handle">{main.handle}</p>
          </div>
        </div>
      )}
      {referrer && (
        <div className="FoundingMembersPage__period-highlight__referrer">
          {referrer.icon ? (
            <img
              className="FoundingMembersPage__period-highlight__referrer__placeholder"
              src={referrer.icon}
              alt="icon of founding member"
            />
          ) : (
            <div className="FoundingMembersPage__period-highlight__referrer__placeholder"></div>
          )}
          <div className="FoundingMembersPage__period-highlight__referrer__data">
            <p className="FoundingMembersPage__period-highlight__referrer__name">{referrer.name}</p>
            <p className="FoundingMembersPage__period-highlight__referrer__handle">{referrer.handle}</p>
          </div>
        </div>
      )}
      {score && (
        <div className="FoundingMembersPage__period-highlight__score">
          <p>{score}</p>
        </div>
      )}
    </>
  );
};

const PeriodHighlights = ({ secondary, tableOneData, tableTwoData }) => (
  <div
    className={cn('FoundingMembersPage__period-highlights__wrapper', {
      'FoundingMembersPage__period-highlights__wrapper--secondary': secondary,
    })}
  >
    <h2
      className={cn('FoundingMembersPage__period-highlights__title', {
        'FoundingMembersPage__period-highlights__title--secondary': secondary,
      })}
    >
      Last period highlights
    </h2>
    <div
      className={cn('FoundingMembersPage__period-highlights', {
        'FoundingMembersPage__period-highlights--secondary': secondary,
      })}
    >
      <div className="FoundingMembersPage__period-highlight">
        <h3
          className={cn('FoundingMembersPage__period-highlight__title', {
            'FoundingMembersPage__period-highlight__title--secondary': secondary,
          })}
        >
          New Founding Members
        </h3>
        <Table className="FoundingMembersPage__period-highlight__table" gridLayout="1.5fr 1fr">
          <Table.Header className="FoundingMembersPage__period-highlight__table__header">
            <Table.HeaderItem>Last period highlights</Table.HeaderItem>
            <Table.HeaderItem>Referrer</Table.HeaderItem>
          </Table.Header>
          <Table.Body className="FoundingMembersPage__period-highlight__table__body">
            {tableOneData?.map((foundingMember, index) => (
              <Table.Row key={index} className="FoundingMembersPage__period-highlight__table__row">
                <PeriodHighlight key={index} userData={foundingMember} />
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="FoundingMembersPage__period-highlight">
        <h3
          className={cn('FoundingMembersPage__period-highlight__title', {
            'FoundingMembersPage__period-highlight__title--secondary': secondary,
          })}
        >
          Direct scoring numbers
        </h3>
        <Table className="FoundingMembersPage__period-highlight__table" gridLayout="1.5fr 1fr">
          <Table.Header className="FoundingMembersPage__period-highlight__table__header">
            <Table.HeaderItem>Last period highlights</Table.HeaderItem>
            <Table.HeaderItem textAlign="right">Score</Table.HeaderItem>
          </Table.Header>
          <Table.Body className="FoundingMembersPage__period-highlight__table__body">
            {tableTwoData?.map((foundingMember, index) => (
              <Table.Row key={index} className="FoundingMembersPage__period-highlight__table__row">
                <PeriodHighlight key={index} userData={foundingMember} />
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  </div>
);

export default PeriodHighlights;
