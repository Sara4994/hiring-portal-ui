import React from 'react';
import { Title, TitleSizes, PageSection, Card } from '@patternfly/react-core';
import { JobInfo } from '../../Organisms';
import { RouteComponentProps } from 'react-router';
import './ApplyJobPage.css';

const ApplyJobPage: React.FC<RouteComponentProps> = (props) =>{
        const id = props.match.params['id'];
    
        return (
            <div id="applyJobView">
                <React.Fragment>
                <PageSection variant="light">
                    <Title headingLevel="h1" size={TitleSizes['4xl']}>
                        Apply to Job
                    </Title>
                </PageSection>
                <PageSection>
                    <Card className="apply-job-grid-style">
                        <JobInfo id = { id }/>
                    </Card>
                </PageSection>
                </React.Fragment>
            </div>
        );
}

export default ApplyJobPage;