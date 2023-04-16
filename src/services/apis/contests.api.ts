import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQuery} from '../redux.config';

export interface IContestBody {
  concept_name: string;
  smaple_image: string;
}

export const contestService = createApi({
  reducerPath: 'contests',
  baseQuery,
  tagTypes: ['Contests'],
  endpoints: build => ({
    contestList: build.query({
      query: () => ({
        method: 'GET',
        url: 'contest/',
      }),
    }),
    contestDetail: build.query({
      query: id => ({
        method: 'GET',
        url: `contest/${id}`,
      }),
    }),
    section: build.query({
      query: () => ({
        method: 'GET',
        url: 'contest/section',
      }),
    }),
    moreContests: build.query({
      query: id => ({
        method: 'GET',
        url: `contest/?contest_category=${id}`,
      }),
    }),
    joinContest: build.mutation<any, any>({
      query: body => ({
        method: 'POST',
        url: 'contest/join_contest/',
        body,
      }),
    }),
    confirmPayment: build.mutation<any, any>({
      query: body => ({
        method: 'POST',
        url: 'payment/confirm/',
        body,
      }),
    }),
    likeContest: build.mutation({
      query: body => ({
        method: 'POST',
        url: 'contest/like/',
        body,
      }),
    }),
  }),
});

const {
  useConfirmPaymentMutation,
  useContestDetailQuery,
  useContestListQuery,
  useSectionQuery,
  useJoinContestMutation,
  useConfirmPaymentMutation,
  useLikeContestMutation,
  useMoreContestsQuery,
} = contestService;

const contestReducerPath = contestService.reducerPath;

export {
  useContestDetailQuery,
  useMoreContestsQuery,
  useLikeContestMutation,
  useConfirmPaymentMutation,
  useSectionQuery,
  useContestListQuery,
  useConfirmPaymentMutation,
  useJoinContestMutation,
  contestReducerPath,
};
