import React from "react";
import { PublishedJobTable } from "../../Organisms";
import { Title, TitleSizes, Button, PageSection, 
    // Toolbar, ToolbarGroup, ToolbarContent, ToolbarItem 
} from '@patternfly/react-core';

const PublishedJobPage = () => {
        return (
            <div id='publishedJobView'>
                <PageSection variant="light">
                    <Title headingLevel="h1" size={TitleSizes['4xl']}>
                        Publish Jobs
                    </Title>                    
                </PageSection>
                {/* <Toolbar
        id="data-toolbar-with-chip-groups"
        className="pf-m-toggle-group-container"
        collapseListedFiltersBreakpoint="md"
        
      >
          <ToolbarContent>
            <ToolbarGroup>
                <ToolbarItem> */}
                <Button type="submit" >Create Job</Button>              
                {/* </ToolbarItem>
            </ToolbarGroup>
          </ToolbarContent>
      </Toolbar> */}
                
                <PageSection>
                    <PublishedJobTable/>
                </PageSection>
            </div>
        );
}

export default PublishedJobPage;